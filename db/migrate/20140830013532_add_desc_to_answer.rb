class AddDescToAnswer < ActiveRecord::Migration
  def change
    add_column :answers, :desc, :text
  end
end
