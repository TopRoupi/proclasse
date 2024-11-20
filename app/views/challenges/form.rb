class Challenges::Form < ApplicationForm
  include Phlex::Rails::Helpers::LinkTo
  include Phlex::Rails::Helpers::RichTextArea

  def initialize(instance)
    super(instance)

    if instance.persisted?
      @action_verb = "Editar"
    else
      @action_verb = "Novo"
    end

  end

  def view_template(&)
    div(class: "flex justify-between items-center") {
      div(class: "flex items-center") {
        h1(class: "text-4xl font-bold leading-normal") { "#{@action_verb} Desafio" }
      }
      div(class: "flex") {
        link_to("Cancelar", :back, class: "btn btn-error mr-2")
        submit(@action_verb, class: "btn btn-primary")
      }
    }

    error_messages

    labeled(
      field(:title).input(
        required: true,
        autofocus: true
      ),
      "Título"
    )

    # GAMBIS
      labeled(
        field(:problem).input(required: true),
        "Problema"
      ) {
        div(class: "bg-white p-2 border border-black/20 rounded shadow-sm") {
          rich_text_area :challenge, :problem
        }
      }

    labeled(
      field(:difficulty).select(
        *Challenge.difficulties.map{|k,v|[k,k]},
        required: true
      ),
      "Dificuldade"
    )
  end
end
