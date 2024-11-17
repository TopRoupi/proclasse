class RoomRequests::Form < ApplicationForm
  include Phlex::Rails::Helpers::LinkTo

  def initialize(instance)
    super(instance)
  end

  def view_template(&)
    div(class: "flex justify-between items-center") {
      div(class: "flex items-center") {
        h1(class: "text-4xl font-bold leading-normal") { "Solicitar Entrada" }
      }
      div(class: "flex") {
        submit("Solicitar", class: "btn btn-primary")
      }
    }

    error_messages


    render field(:room_id).input(type: :hidden)

    labeled(
      field(:identifier).input(
        required: true,
        autofocus: true,
        autocomplete: "room_name"
      ),
      "RGM"
    )
  end
end
