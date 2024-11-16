# frozen_string_literal: true

class ProNavBarComponent < ApplicationComponent
  include Phlex::Rails::Helpers::LinkTo

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
        Avatar {
          div(class: "w-8 rounded-full") {
            img(src: "https://i.imgur.com/37M2uoM.jpg", alt: "")
          }
        }
      }

      dropdown.menu(:base_100, class: "rounded-box w-52 shadow") { |menu|
        menu.item { link_to("Login", sign_in_path) }
      }
    }
  end
end
