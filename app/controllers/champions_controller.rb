class ChampionsController < ApplicationController
  def index
    @champions = Champion.all
    render layout: 'admin'
  end
end
