# frozen_string_literal: true

class RoomCardComponent < ApplicationComponent
  attr_reader :room
  include Phlex::Rails::Helpers::ImageTag
  include Phlex::Rails::Helpers::LinkTo

  def initialize(room:)
    @room = room
  end

  def view_template()
    Card(:base_100, class: "flex flex-row items-center justify-between mt-4 w-full shadow-md border border-black/10 px-4 py-2") { |card|
      h2(class: "font-semibold w-fit") { room.name }

      div(class: "flex") {
        if Current.user.professor?
          Button(modal: "qrcode#{room.code}", class: "w-fit btn-md btn-ghost") { Remix::QrCodeLine(class: 'w-6') }
          qrcode_modal
        end
        link_to("Selecionar", select_room_path(room), class: "btn btn-md btn-secondary ml-2")
      }
    }
  end

  def qrcode_modal
    Modal(:tap_outside_to_close, id: "qrcode#{room.code}") { |modal|
      modal.body {
        h3(class: "text-lg font-bold text-base-content/70") { "QRCODE #{room.name}" }

        div(class: "flex justify-center mt-10") {
          image_tag("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=#{room_request_url(room.code)}")
        }

        p(class: "pt-4 pb-0 text-center mt-3 mb-10 text-2xl font-semibold") {
          room_request_url(room.code)
        }
      }
    }
  end
end
