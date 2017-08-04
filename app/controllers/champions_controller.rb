class ChampionsController < ApplicationController
  def index
    @champions = Champion.all
    render layout: 'admin'
  end

  def all
    @champions = Champion.all
    render json: @champions
  end
end
