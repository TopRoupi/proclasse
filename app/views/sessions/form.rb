class Sessions::Form < ApplicationForm
  include Phlex::Rails::Helpers::LinkTo

  def initialize(instance, email_value: "")
    @email_value = email_value
    super(instance)
  end

  def view_template(&)
    render SessionCardComponent.new(title: "Login") do
      error_messages

      labeled(
        field(:email).input(type: :email, value: @email_value, required: true, autofocus: true, autocomplete: "email"),
        "Email"
      )
      labeled(
        field(:password).input(type: :password, required: true, autocomplete: "current-password"),
        "Senha"
      )

      submit("Logar", class: "btn btn-primary mt-4 ml-auto block")


      div(class: "flex mt-4 opacity-85") {
        link_to "Registrar", sign_up_path, class: "mr-2"
        link_to "Esqueci a senha", new_identity_password_reset_path
      }
    end
  end
end
