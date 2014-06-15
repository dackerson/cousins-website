class Answer < ActiveRecord::Base
  belongs_to :question
  has_many :program_answers
  has_many :programs, :through => :program_answers
end
