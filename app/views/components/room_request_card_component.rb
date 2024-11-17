# frozen_string_literal: true

class RoomRequestCardComponent < ApplicationComponent
  include Phlex::Rails::Helpers::LinkTo

  attr_reader :room_request

  def initialize(room_request)
    @room_request = room_request
  end

  def view_template
    Card(:base_100, class: "flex flex-row items-center justify-between mt-4 w-full shadow-md border border-black/10 px-4 py-2") { |card|
      p { room_request.student.user.name + " " + room_request.identifier }

      div {
        link_to("Rejeitar", "#", class: "btn btn-md btn-error ml-2")
        link_to("Aceitar", "#", class: "btn btn-md btn-success ml-2")
      }
    }
  end
end
