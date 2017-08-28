class FightController < ApplicationController
  def index
  end

  def calculate
    results = Fight.new(
      params[:stats],
      params[:left_id],
      params[:right_id]
    ).calculate
    render json: results
  end
end
