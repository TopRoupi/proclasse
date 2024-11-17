class Registrations::Form < ApplicationForm
  include Phlex::Rails::Helpers::LinkTo

  def initialize(instance)
    super(instance)
  end

  def view_template(&)
    render SessionCardComponent.new(title: "Sign up") do
      submit("Sign up", class: "btn btn-primary float-right")

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
    end
  end
end
