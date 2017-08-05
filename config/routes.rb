Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
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
