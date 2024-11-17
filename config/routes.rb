Rails.application.routes.draw do
  get  "sign_in", to: "sessions#new"
  post "sign_in", to: "sessions#create"
  post "change_context", to: "sessions#change_context"
  get  "sign_up", to: "registrations#new"
  post "sign_up", to: "registrations#create"
  resources :sessions, only: [:index, :show, :destroy]
  resource  :password, only: [:edit, :update]
  namespace :identity do
    resource :email,              only: [:edit, :update]
    resource :email_verification, only: [:show, :create]
    resource :password_reset,     only: [:new, :edit, :create, :update]
  end
  get "home/index"

  post "become_teacher", to: "professors#become_teacher"

  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  root "home#index"
  get "up" => "rails/health#show", as: :rails_health_check
end
