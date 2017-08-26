Rails.application.routes.draw do
  get 'masteries/index'

  resources :champions, only: [:index, :show] do
    get 'all', on: :collection
  end

  get 'runes/index'

  get 'items/index'

  get 'items/all'

  root to: 'fight#index'

  get 'fight/index'
  post 'fight/calculate'
end
