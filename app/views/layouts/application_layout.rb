# frozen_string_literal: true

class ApplicationLayout < ApplicationView
  include Phlex::Rails::Layout
  include Phlex::Rails::Helpers::ContentFor

  attr_reader :alert, :notice

  def initialize(alert: nil, notice: nil)
    @alert = alert
    @notice = notice
  end

  def view_template()
    html do
      head do
        title { title }
        meta(name: "viewport", content: "width=device-width,initial-scale=1")
        meta(name: "apple-mobile-web-app-capable", content: "yes")
        meta(name: "mobile-web-app-capable", content: "yes")
        csrf_meta_tags
        csp_meta_tag
        # = tag.link rel: "manifest", href: pwa_manifest_path(format: :json)
        link(rel: "icon", href: "/icon.png", type: "image/png")
        link(rel: "icon", href: "/icon.svg", type: "image/svg+xml")
        link(rel: "apple-touch-icon", href: "/icon.png")
        # Includes all stylesheet files in app/assets/stylesheets
        stylesheet_link_tag "tailwind",
                            "inter-font",
                            "data-turbo-track": "reload"
        stylesheet_link_tag :app, "data-turbo-track": "reload"
        javascript_importmap_tags
      end
      body do
        render ProNavBarComponent
        main(class: "max-w-5xl mx-auto mt-14 px-4") {
          p { notice }
          p { alert }
          yield
        }
      end
    end
  end
end
