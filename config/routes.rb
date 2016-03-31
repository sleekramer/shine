Rails.application.routes.draw do
  devise_for :users
  resources :customers, only: [:index, :show]
  get 'angular_test', to: 'angular_test#index'
  root 'dashboard#index'
end
