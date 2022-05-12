# 

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    resources :greetings, only: [:index] do
    end
  end
  # Defines the root path route ("/")
  root 'static#index'
end
