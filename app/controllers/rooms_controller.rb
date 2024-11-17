class RoomsController < ApplicationController
  before_action :set_room, only: %i[ show edit update destroy ]
  before_action :ensure_professor, only: %i[ new edit update destroy ]

  skip_before_action :authenticate, only: %i[ new_request_entry ]

  def select
    if params[:destroy]
      Current.user.update!(selected_room_id: nil)
      redirect_to root_path
    else
      room = Room.find(params[:id])
      Current.user.update!(selected_room_id: room.id)
      redirect_to root_path
    end
  end

  def new_request_entry
    render Rooms::RequestView.new(room_request: nil)
    return
    # TODO move logic to model
    user = Current.user
    room = Room.find_by(code: params[:code])

    if user
      session[:request_entry] = nil
      room_request = RoomRequest.create!(student: Current.user.student, room: room)

      render Rooms::RequestView.new(room_request: room_request)
    else
      session[:request_entry] = params[:code]
      redirect_to sign_in_path
    end
  end

  # GET /rooms or /rooms.json
  def index
    if Current.user.student
      @rooms = Current.user.student.accepted_rooms
    else
      @rooms = Room.all
    end
  end

  # GET /rooms/1 or /rooms/1.json
  def show
  end

  # GET /rooms/new
  def new
    @room = Room.new
  end

  # GET /rooms/1/edit
  def edit
  end

  # POST /rooms or /rooms.json
  def create
    @room = Room.new(room_params)
    @room.professor = Current.user.professor
    @room.code = SecureRandom.alphanumeric(6)

    respond_to do |format|
      if @room.save
        format.html { redirect_to rooms_path, notice: "Room was successfully created." }
        format.json { render :show, status: :created, location: @room }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rooms/1 or /rooms/1.json
  def update
    respond_to do |format|
      if @room.update(room_params)
        format.html { redirect_to @room, notice: "Room was successfully updated." }
        format.json { render :show, status: :ok, location: @room }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rooms/1 or /rooms/1.json
  def destroy
    @room.destroy!

    respond_to do |format|
      format.html { redirect_to rooms_path, status: :see_other, notice: "Room was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_room
      @room = Room.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def room_params
      params.expect(room: [ :name ])
    end
end
