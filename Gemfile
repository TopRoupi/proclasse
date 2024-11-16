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

gem "pg", "~> 1.1"
gem "solid_cache"
gem "solid_queue"
gem "solid_cable"

# gem "bcrypt", "~> 3.1.7"
# gem "image_processing", "~> 1.2"
gem "bootsnap", require: false
gem "tzinfo-data", platforms: %i[ windows jruby ]

group :development, :test do
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
