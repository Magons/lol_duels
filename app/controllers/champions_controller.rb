class ChampionsController < ApplicationController
  def index
    @champions = Champion.all
    render layout: 'admin'
  end

  def all
    @champions = Champion.all.map do |champion|
      {
        id: champion.id,
        name: champion.name,
        image: champion.data['image']['full']
      }
    end
    render json: @champions
  end

  def show
    @champion = Champion.find(params[:id])
    render json: @champion
  end
end
