# frozen_string_literal: true

class RoomRequestReflex < ApplicationReflex
  before_reflex :set_room_request

  def reject
    @room_request.destroy
  end

  def accept
    @room_request.update(accepted: true)
  end

  private

  def set_room_request
    @room_request = RoomRequest.find(element.dataset[:room_request_id])
  end
end
