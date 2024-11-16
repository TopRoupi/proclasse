class HomeController < ApplicationController
  # skip_before_action :authenticate

  def index
    render Home::IndexView.new
  end
end
