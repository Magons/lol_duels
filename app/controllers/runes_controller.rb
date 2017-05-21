class RunesController < ApplicationController
  def index
    @runes = Rune.all
    render layout: 'admin'
  end
end
