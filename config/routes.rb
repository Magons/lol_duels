Rails.application.routes.draw do
  get 'masteries/index'

  get 'champions/index'

  get 'runes/index'

  get 'items/index'

  root to: 'fight#index'

  get 'fight/index'
  post 'fight/calculate'
end
