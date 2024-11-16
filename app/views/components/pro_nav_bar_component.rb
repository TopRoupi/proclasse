# frozen_string_literal: true

class ProNavBarComponent < ApplicationComponent
  include Phlex::Rails::Helpers::LinkTo
  include Phlex::Rails::Helpers::ButtonTo

  attr_accessor :user

  def initialize(user: nil)
    @user = user
  end

  def view_template
    Navbar(:base_200, class: "shadow-md") { |navbar|
      div(class: "flex max-w-5xl w-full mx-auto") {
        navbar.start {
          link_to(home_index_path) {
            Button(:ghost, class: "text-xl") {"PC"}
          }

          Menu(:horizontal, class: "px-1") { |menu|
            menu.item {
              Link { "Turmas" }
            }
          }
        }

        navbar.end(class: "flex") { profile_dropdown }
      }
    }
  end

  def profile_dropdown
    Dropdown(:end) { |dropdown|
      dropdown.button(:ghost, class: "mb-1") {
        if user
          user.name
        else
          "Perfil"
        end
      }

      dropdown.menu(:base_100, class: "rounded-box w-52 shadow") { |menu|
        if user
          menu.item { link_to("Logout", Current.session, data: { "turbo-method": :delete }) }
        else
          menu.item { link_to("Login", sign_in_path) }
        end
      }
    }
  end
end
