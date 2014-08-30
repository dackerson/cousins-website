class AddContactNameToProgram < ActiveRecord::Migration
  def change
    add_column :programs, :contact_name, :string
  end
end
