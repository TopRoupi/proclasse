class ProfessorsController < ApplicationController
  def become_teacher
    Current.user.register_as_teacher
    redirect_to root_path
  end
end
