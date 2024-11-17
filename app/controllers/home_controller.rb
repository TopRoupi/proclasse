class HomeController < ApplicationController
  # skip_before_action :authenticate

  def index
    if Current.user.selected_room
      render Home::IndexView.new
    else
      redirect_to rooms_path
    end
  end
end
