class PagesController < ApplicationController
  def home
  end

  def admin
    @programs = Program.all
    render layout: 'admin'
  end
end
