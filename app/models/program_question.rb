class ProgramQuestion < ActiveRecord::Base
  belongs_to :program
  belongs_to :question
end
