source "https://rubygems.org"

gem "rails", "~> 8.0.0"
gem "puma", ">= 5.0"
gem "kamal", require: false
gem "thruster", require: false

gem "propshaft"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "tailwindcss-rails"
gem "jbuilder"
gem "phlex-rails"
# gem "phlexy_ui", git: "https://github.com/TopRoupi/phlexy_ui"
# gem "phlexy_ui", path: "../phlexy_ui"
gem "phlexy_ui", "~> 0.1.20"
gem "superform", git: "https://github.com/rubymonolith/superform"
gem "authentication-zero", "~> 4.0"
gem "octicons"
gem "octicons_helper"

gem "acts_as_tenant"
gem "pg", "~> 1.1"
gem "solid_cache"
gem "solid_queue"
gem "solid_cable"

gem "bcrypt", "~> 3.1.7"
gem "image_processing", "~> 1.2"
gem "bootsnap", require: false
gem "tzinfo-data", platforms: %i[ windows jruby ]

group :development, :test do
  gem "database_consistency", require: false
  gem "annotaterb"
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
end

group :development do
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end

gem "phlex-icons", "~> 1.4"

gem 'stimulus_reflex', git: "https://github.com/TopRoupi/stimulus_reflex"

gem "redis", "~> 5"

gem "action-cable-redis-backport", "~> 1"

gem "redis-session-store", "~> 0.11.5"
