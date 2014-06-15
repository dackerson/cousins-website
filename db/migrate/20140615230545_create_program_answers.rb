class CreateProgramAnswers < ActiveRecord::Migration
  def change
    create_table :program_answers do |t|
      t.integer :program_id
      t.integer :answer_id

      t.timestamps
    end
  end
end
