# frozen_string_literal: true

class Rooms::RequestView < ApplicationView
  attr_reader :room_request
  include Phlex::Rails::Helpers::LinkTo

  def initialize(room_request: )
    @room_request = room_request
  end

  def view_template

    div(class: "w-40 m-auto block") {
      Remix::CheckboxCircleLine(class: 'mw-md')
    }
    p(class: "text-center text-xl mt-4") { "Solicitação para entrar na turma criada." }

    div(style: "max-width: 400px", class: "w-full mt-4 m-auto flex justify-end") {
      link_to("Voltar", rooms_path, class: "btn btn-primary ml-auto")
    }
  end
end
