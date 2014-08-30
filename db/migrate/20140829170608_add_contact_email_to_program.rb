class AddContactEmailToProgram < ActiveRecord::Migration
  def change
    add_column :programs, :contact_email, :string
  end
end
