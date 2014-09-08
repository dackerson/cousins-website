class PagesController < ApplicationController
  before_action :authenticate, only: [:admin]

  def home
  end

  def admin
    @programs = Program.all
    render layout: 'admin'
  end
end
