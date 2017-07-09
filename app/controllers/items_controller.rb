class ItemsController < ApplicationController
  def index
    @items = Item.all
    render layout: 'admin'
  end

  def all
    @items = Item.all
    render json: @items
  end
end
