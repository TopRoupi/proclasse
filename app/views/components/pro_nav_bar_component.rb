# frozen_string_literal: true

class ProNavBarComponent < ApplicationComponent
  def view_template
    Navbar(:base_200, class: "shadow-xl") { |navbar|
      div(class: "flex max-w-5xl w-full mx-auto") {
        navbar.start {
          Button(:ghost, class: "text-xl") {"PC"}

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
        menu.item { a { "Item 1" } }
        menu.item { a { "Item 2" } }
      }
    }
  end
end
