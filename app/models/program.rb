class Program < ActiveRecord::Base
  has_many :program_answers
  has_many :answers, :through => :program_answers
end
