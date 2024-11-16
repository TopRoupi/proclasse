class HomeController < ApplicationController
  layout false

  def index
    render Home::IndexView.new
  end
end
