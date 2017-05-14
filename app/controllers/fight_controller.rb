class FightController < ApplicationController
  def index
  end

  def calculate
    calculate = Fight.new(params[:left], params[:right]).calculate
    render json: calculate
  end

  def fighters_params
    params.require(:left, :right).permit!
  end
end
