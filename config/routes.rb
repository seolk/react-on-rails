Rails.application.routes.draw do

  namespace :api do
    resources :items
  end

  get '*other', to: 'static#index'
end
