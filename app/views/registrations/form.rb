class Registrations::Form < ApplicationForm
  include Phlex::Rails::Helpers::LinkTo

  def initialize(instance)
    super(instance)
  end

  def around_template(&)
    super do
      yield
    end
  end

  def view_template(&)
    render SessionCardComponent.new(title: "Signup") do
      error_messages

      labeled(
        field(:name).input(
          required: true,
          autofocus: true,
          autocomplete: "name"
        ),
        "Nome"
      )

      labeled(
        field(:email).input(
          type: :email,
          required: true,
          autocomplete: "email"
        ),
        "Email"
      )

      labeled(
        field(:password).input(
          type: :password,
          required: true,
          autocomplete: "new-password"
        ),
        "Senha"
      )


      labeled(
        field(:password_confirmation).input(
          type: :password,
          required: true,
          autocomplete: "new-password"
        ),
        "Confimação Senha"
      )


      submit("Signup", class: "btn btn-primary mt-4 ml-auto block")
    end
  end
end
