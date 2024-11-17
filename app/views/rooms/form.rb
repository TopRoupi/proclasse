class Rooms::Form < ApplicationForm
  include Phlex::Rails::Helpers::LinkTo

  def initialize(instance)
    super(instance)
  end

  def view_template(&)
    div(class: "flex justify-between items-center") {
      div(class: "flex items-center") {
        h1(class: "text-4xl font-bold leading-normal") { "Nova Turma" }
      }
      div(class: "flex") {
        link_to("Cancelar", rooms_path, class: "btn btn-error mr-2")
        submit("Criar", class: "btn btn-primary")
      }
    }

    error_messages

    labeled(
      field(:name).input(
        required: true,
        autofocus: true,
        autocomplete: "room_name"
      ),
      "Nome"
    )
  end
end
