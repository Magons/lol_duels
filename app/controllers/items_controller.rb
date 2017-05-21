class ItemsController < ApplicationController
  def index
    @items = Item.all
    render layout: 'admin'
  end
end
