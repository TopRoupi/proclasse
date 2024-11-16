# frozen_string_literal: true

class Home::IndexView < ApplicationView
  def view_template
    h1 { "Home::Index" }
    p { "dwadawdwaddwawwwwwwwwd" }
    Button :primary do
      "Hello, world!"
    end
  end
end
