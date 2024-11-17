# frozen_string_literal: true

class RoomRequestCardComponent < ApplicationComponent
  include Phlex::Rails::Helpers::LinkTo
  include Phlex::Rails::Helpers::DOMID

  attr_reader :room_request

  def initialize(room_request)
    @room_request = room_request
  end

  def view_template
    Card(:base_100, class: "flex flex-row items-center justify-between mt-4 w-full shadow-md border border-black/10 px-4 py-2", id: dom_id(room_request)) { |card|
      p { room_request.student.user.name + " " + room_request.identifier }

      div {
        Button(
          :error,
          class: "btn btn-md btn-error ml-2",
          data_reflex: "click->RoomRequestReflex#reject",
          data_room_request_id: room_request.id
        ) { "Rejeitar" }

        Button(
          :success,
          class: "btn btn-md btn-success ml-2",
          data_reflex: "click->RoomRequestReflex#accept",
          data_room_request_id: room_request.id
        ) { "Aceitar" }
      }
    }
  end
end
