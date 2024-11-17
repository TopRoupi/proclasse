class RoomRequestsController < ApplicationController
  skip_before_action :authenticate, only: %i[ new ]

  def new
    if Current.user
      room = Room.find_by(code: params[:code])

      room_request = RoomRequest.new(room: room)
      render RoomRequests::NewView.new(room_request: room_request)
    else
      session[:request_entry] = params[:code]
      redirect_to sign_in_path
    end
  end

  def create
    session[:request_entry] = nil

    room_request = RoomRequest.new(room_request_params)
    room_request.student = Current.user.student

    if room_request.save
      redirect_to success_room_request_path
    else
      render RoomRequests::NewView.new(room_request: room_request), status: :unprocessable_entity
    end
  end

  def success
    render RoomRequests::NewView.new(room_request: nil, created: true)
  end

  private
    def room_request_params
      params.expect(room_request: [ :room_id,  :identifier])
    end
end
