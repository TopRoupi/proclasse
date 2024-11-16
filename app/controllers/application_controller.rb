class ApplicationController < ActionController::Base
  layout -> { ApplicationLayout }

  # fuck you DHH
  # allow_browser versions: :modern
end
