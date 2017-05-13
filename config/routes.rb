Rails.application.routes.draw do
  root to: 'fight#index'

  get 'fight/index'
  post 'fight/calculate'
end
