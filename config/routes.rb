Rails.application.routes.draw do
  get 'masteries/index'

  get 'champions/index'

  get 'champions/all'

  get 'runes/index'

  get 'items/index'

  get 'items/all'

  root to: 'fight#index'

  get 'fight/index'
  post 'fight/calculate'
end
