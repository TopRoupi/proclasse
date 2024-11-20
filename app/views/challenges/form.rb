class Challenges::Form < ApplicationForm
  include Phlex::Rails::Helpers::LinkTo

  def initialize(instance)
    super(instance)
  end

  def view_template(&)
    div(class: "flex justify-between items-center") {
      div(class: "flex items-center") {
        h1(class: "text-4xl font-bold leading-normal") { "Novo Desafio" }
      }
      div(class: "flex") {
        link_to("Cancelar", challenges_path, class: "btn btn-error mr-2")
        submit("Criar", class: "btn btn-primary")
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

    labeled(
      field(:problem).textarea(
        required: true,
      ),
      "Problema"
    )

    labeled(
      field(:difficulty).select(
        *Challenge.difficulties.map{|k,v|[k,k]}
      ),
      "Dificuldade"
    )
  end
end
