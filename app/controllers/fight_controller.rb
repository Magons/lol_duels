class FightController < ApplicationController
  def index
  end

  def calculate
    results = Fight.new(fighters_params).calculate
    render json: results
  end

  def fighters_params
    params.require(:stats).permit!
  end
end
