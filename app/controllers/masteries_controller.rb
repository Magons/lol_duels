class MasteriesController < ApplicationController
  def index
    @masteries = Mastery.all
    render layout: 'admin'
  end
end
